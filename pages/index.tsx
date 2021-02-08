import React from 'react';
import Head from 'next/head';
import { TodoContainer } from '../components/TodoContainer';
import { withTodoItems } from '../hoc/withTodoItems';

export default function Home({ todoItems }) {
    return (
        <div>
            <Head>
                <title>Todo SSR</title>
            </Head>

            <main>
                <h1>Welcome to Todo SSR</h1>

                <TodoContainer items={todoItems} />
            </main>

            <footer>
                <p>A demonstration SSR todo app.</p>
            </footer>
        </div>
    );
}

export const getServerSideProps = withTodoItems((context) => {
    return { props: { todoItems: context.todoItems } };
});
