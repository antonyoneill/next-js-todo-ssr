import React from 'react';
import {TodoContainer} from "./TodoContainer";
import {render} from "@testing-library/react";

describe("TodoContainer", () => {
    it('Renders a polite message when there are no items', () => {
        const items = [];
        const context = render(<TodoContainer items={items} />);

        context.getByText("Sit back and relax, nothing to do.");
    })
    it('Renders each todo item', () => {
        const items = ["Todo 1", "Todo 2"];

        const context = render(<TodoContainer items={items} />);

        context.getByText("Todo 1");
        context.getByText("Todo 2");
    })
})