/* @flow */
import type { State } from '../../common/types';
import DynamicField from './DynamicField';
import R from 'ramda';
import React from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { ValidationError } from '../../common/lib/validation';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import {
  Block,
  Box,
  Button,
  Checkbox,
  FieldError,
  Flex,
  Form,
  Heading,
  Input,
  PageHeader,
  Pre,
  Radio,
  Select,
  Space,
  Title,
  View,
} from '../app/components';

// The example of dynamically loaded editable data.
const dynamicColorsList = [
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
].map((concept, index) => ({
  id: index,
  name: concept,
}));

type LocalState = {
  disabled: boolean,
  error: ?Object,
  submittedValues: ?Object,
};

class FieldsPage extends React.Component {

  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    dynamicFields: React.PropTypes.object,
  };

  state: LocalState = {
    disabled: false,
    error: null,
    submittedValues: null,
  };

  onFormSubmit = () => {
    const { dynamicFields, fields } = this.props;

    const values = {
      ...fields.$values(),
      concepts: {
        ...dynamicFields,
      },
    };

    // This is just a demo. This code belongs to Redux action creator.

    // Disable form.
    this.setState({ disabled: true });

    // Simulate async action.
    setTimeout(() => {
      this.setState({ disabled: false });
      const isValid = values.name.trim();
      if (!isValid) {
        const error = new ValidationError('required', { prop: 'name' });
        this.setState({ error, submittedValues: null });
        return;
      }
      this.setState({ error: null, submittedValues: values });
      fields.$reset();
    }, 500);
  }

  render() {
    const { fields } = this.props;
    const { disabled, error, submittedValues } = this.state;

    return (
      <View>
        <Title message={linksMessages.fields} />
        <PageHeader
          description="Something like redux-form but simplified and universal.
            Will be released as lib soon."
          heading="redux-fields"
        />
        <Form onSubmit={this.onFormSubmit}>
          <Input
            {...fields.name}
            aria-invalid={ValidationError.isInvalid(error, 'name')}
            disabled={disabled}
            label="Your Name"
            maxLength={100}
            type="text"
          />
          <FieldError error={error} prop="name" />
          <Heading alt>Dynamic Colors List</Heading>
          <Block>

            <Flex wrap>
              {dynamicColorsList.map(item =>
                <Box mr={1} key={item.id}>
                  <DynamicField
                    disabled={disabled}
                    item={item}
                    path={['fieldsPage', 'dynamic', item.id]}
                  />
                </Box>
              )}

            </Flex>
          </Block>
          <Block>
            <Checkbox
              {...fields.isMartian}
              checked={fields.isMartian.value}
              disabled={disabled}
              label="I'm Martian"
            />
            <Checkbox
              {...fields.isVenusian}
              checked={fields.isVenusian.value}
              disabled={disabled}
              label="I'm Venusian"
            />
          </Block>
          <Block>
            <Flex>
              <Radio
                {...fields.gender}
                checked={fields.gender.value === 'male'}
                disabled={disabled}
                label="Male"
                value="male"
              />
              <Space x={2} />
              <Radio
                {...fields.gender}
                checked={fields.gender.value === 'female'}
                disabled={disabled}
                label="Female"
                value="female"
              />
              <Space x={2} />
              <Radio
                {...fields.gender}
                checked={fields.gender.value === 'other'}
                disabled={disabled}
                label="Other"
                value="other"
              />
            </Flex>
          </Block>
          <Block>
            <Select
              {...fields.donation}
              disabled={disabled}
              label="Donation"
              options={[
                { children: 'Two', value: 2 },
                { children: 'Four', value: 4 },
                { children: 'Eight', value: 8 },
                { children: 'Sixteen', value: 16 },
                { children: 'Thirty-Two', value: 32 },
                { children: 'Sixty-Four', value: 64 },
              ]}
            />
          </Block>
          {/*
            Why no multiple select? Because users are not familiar with that.
            Use checkboxes or custom checkable dynamic fields instead.
          */}
          <Button disabled={disabled} type="submit">
            <FormattedMessage {...buttonsMessages.submit} />
          </Button>
          {submittedValues &&
            <Pre>
              {JSON.stringify(submittedValues, null, 2)}
            </Pre>
          }
        </Form>
      </View>
    );
  }

}

FieldsPage = fields({
  path: 'fieldsPage',
  fields: [
    'donation',
    'gender',
    'isVenusian',
    'isMartian',
    'name',
  ],
  getInitialState: () => ({
    donation: '2',
    gender: 'male',
    isVenusian: false,
    isMartian: false,
  }),
})(FieldsPage);

export default connect(
  (state: State) => ({
    dynamicFields: R.path(['fieldsPage', 'dynamic'], state.fields),
  }),
)(FieldsPage);
