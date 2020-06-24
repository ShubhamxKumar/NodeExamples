// we use $ to access jquery, $ means jquery function
// '$' function is a async function, so whatever we write in () after jquery is like a call back async function
// fascinating thing is that it runs after the page is completely loaded


$(function(){
    console.log('Page has loaded');// and this line will print after the page loads
    let newtodo = $('#newtodo');
    // we select element same as we use in css, like we select id using '#' and classes using '.'
    // so this way we get access to that element on the page through a variable.
    let addtodo = $('#addtodo');
    let todolist = $('#todolist');

    // Now here we are controlling the button on click event using jquery, which executes a function on click of the button 
    addtodo.click(function () {
        console.log('button was clicked!!!!');
        let newtask = newtodo.val();
        // As we are using jquery we can get access to the value inside that input bar using .val() property
        console.log(newtask);
        // Now we are going to do some shit.
        // we can send some requests from the browser without reloading the page and get back a response 
        // that is, we can send a get or a post request to a server and get back a response without reloading our current 
        // page, and this method is called AJAX.
        // jquery actually let you send post requests like this.
        $.post(
            '/todos',
            {
                task : newtask,
            },
            function(resdata){
                console.log(resdata);
                todolist.empty();// what this do is that manipulates the DOM to empty the ul list
                for(todo of resdata){
                    // this is a special syntax of for loop, it also iterates through the list we are getting and put
                    // the values in the todo variable.
                    todolist.append("<li>" + todo.task + "</li>");
                    //and for each item it performs the appending
                    // unfortunately we have to write that wierd html syntax when we are appending.
                    // Please Shubham take a side note of that, please buddy.
                } 
            }
        )
        // SO what we did is that, we send a post request to that path, which is relative to the website in that first argument,
        // the second argument contains the body of the request we are sending
        // the third argument is a callback function which runs when the request is sent and we recieve a response back.
        // in this case the data we recieve back is an array, remeber that we created one in todo.js in routes folder.
        // Yeah that wierd one.
    })

})

console.log('Page is loading');// this line will print first because it executed while the page loads
// In short all non-jquery code will load while the page get loaded and after the loading ends all the jquery code will run
// that all the code starting with $ sign