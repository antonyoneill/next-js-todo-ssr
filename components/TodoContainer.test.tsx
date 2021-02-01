import React from 'react';
import {TodoContainer} from "./TodoContainer";
import {render} from "@testing-library/react";

describe("TodoContainer", () => {
    it('Renders a polite message when there are no items', () => {
        const items = [];
        const context = render(<TodoContainer items={items} />);

        context.getByText("Sit back and relax, nothing to do.");
    })
    it.skip('Renders each todo item', () => {

    })
})