import {render, screen, cleanup} from '@testing-library/react'
import Todo from '../todo';
    
afterEach(()=>{
    cleanup();
})  ; 
    
test('should render non-completed todo ',()=>{
    const todo={id:1,title:'making food',completed:false};
    render(<Todo todo={todo}/>);
    const todoElement=screen.getByTestId('todo-1');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("making food");
    expect(todoElement).not.toContainHTML('<strike>');

});
test('should render completed todo ',()=>{
    const todo={id:2,title:'washing dishes',completed:true};
    render(<Todo todo={todo}/>);
    const todoElement=screen.getByTestId('todo-2');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("washing dishes");
    expect(todoElement).toContainHTML('<strike><h1>washing dishes</h1></strike>');

});

    
