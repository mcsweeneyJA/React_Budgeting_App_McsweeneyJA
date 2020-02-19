import {shallow} from 'enzyme';
import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render expensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={1}
        expensesTotal={235}
        />);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render expensesSummary with multiple expenses", () => {
        const wrapper = shallow(
          <ExpensesSummary expenseCount={23} expensesTotal={235123456} />
        );
        expect(wrapper).toMatchSnapshot();

});