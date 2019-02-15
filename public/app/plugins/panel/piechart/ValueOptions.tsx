import React, { PureComponent } from 'react';
import { FormLabel, PanelOptionsProps, PanelOptionsGroup, Select } from '@grafana/ui';
import UnitPicker from 'app/core/components/Select/UnitPicker';
import { PiechartOptions } from './types';

const statOptions = [
  { value: 'min', label: 'Min' },
  { value: 'max', label: 'Max' },
  { value: 'avg', label: 'Average' },
  { value: 'current', label: 'Current' },
  { value: 'total', label: 'Total' },
];

const labelWidth = 6;

export default class ValueOptions extends PureComponent<PanelOptionsProps<PiechartOptions>> {
  onUnitChange = unit => this.props.onChange({ ...this.props.options, unit: unit.value });

  onStatChange = stat => this.props.onChange({ ...this.props.options, stat: stat.value });

  render() {
    const { stat, unit } = this.props.options;

    return (
      <PanelOptionsGroup title="Value">
        <div className="gf-form">
          <FormLabel width={labelWidth}>Stat</FormLabel>
          <Select
            width={12}
            options={statOptions}
            onChange={this.onStatChange}
            value={statOptions.find(option => option.value === stat)}
          />
        </div>
        <div className="gf-form">
          <FormLabel width={labelWidth}>Unit</FormLabel>
          <UnitPicker defaultValue={unit} onChange={this.onUnitChange} />
        </div>
      </PanelOptionsGroup>
    );
  }
}
