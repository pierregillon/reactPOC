(function(ioc){
    'use strict';

    describe('A todostore', function(){
        var todoStore;
        var eventPublisher = {on:function(){}};

        beforeEach(ioc.classes(function(TodoStore){
            todoStore = new TodoStore(eventPublisher);
        }));

        it('should be defined', function(){
            expect(todoStore).toBeDefined();
        });

        it('should have a method "addChangeListener" defined', function(){
            expect(todoStore.addChangeListener).toBeDefined();
        });
    });

}(ioc));