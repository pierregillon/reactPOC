(function(module, require){
    'use strict';
    module.exports = TodoList;

    var React = require('react');

    function TodoList(todoStore) {
        return React.createClass({
            getInitialState : function () {
                return buildState();
            },
            componentDidMount : function () {
                todoStore.addChangeListener(this.onChange);
            },
            componentWillUnmount : function () {
                todoStore.removeChangeListener(this.onChange);
            },
            render : function () {
                return (
                    <div>
                        {this.state.todoItems.map(function (item) {
                            return (
                                <li>{item.value}</li>
                            );
                        })}
                    </div>
                );
            },
            onChange : function () {
                this.setState(buildState());
            }
        });

        // ----- Internal logic
        function buildState() {
            return {
                todoItems: todoStore.getTodoItems()
            };
        }
    }
}(module, require));