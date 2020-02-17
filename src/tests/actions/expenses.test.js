import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new456'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'new456'
        }
    })

})

test('should setup add expense action object with provided vals', () => {
    const expenseData = {
        description: 'TestDescription',
        amount: 12345,
        createdAt: 1000,
        note: 'Test Note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)

        }
    });
});

test('should setup add expense action object with default vals', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount:  0,
            createdAt:  0,
            id: expect.any(String)

        }
    });
})