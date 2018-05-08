// array to show which are showing (1) and not showing (0)
// first one is only displaying
var blogs = [1, 0, 0];

// set all the current empty blogs to hidden
document.getElementsByClassName('blog_post')[1].style.display = 'none';
document.getElementsByClassName('blog_post')[2].style.display = 'none';
// function deletes this post
function deleteBlogPost(elem){
  // stops displaying
  elem.parentElement.style.display ='none';
  // gets the blog list
  var children = document.getElementsByClassName('blog_post');
  // goes through the list
  for (var i = 0; i < children.length; i++) {
    // if the blog from the blog list matches this (for loop)
    if(elem.parentElement === children[i]){
      // deletes from the list
      blogs[i] = 0;
    }
  }
}

function addBlogPost(){
  // this is a form
  // gets value from boxes
  var title = document.getElementById('blog_title').value;
  var date = document.getElementById('blog_date').value;
  var text = document.getElementById('blog_text').value;


  // find the first empty blog spot
  // if the list is full then return an error
  // this is as intended

  // this variable says which slot is the first empty one
  var first_empty;
  for (var i = 0; i < blogs.length; i++) {
    if (blogs[i] == 0) {
      // if its empty than put i in
      first_empty = i;
      // now it's display
      blogs[i] = 1;
      // break so the for loop stops running through the values of i after finding an empty slot
      break;
    }
  }

  // get the blog list
  var blog_list = document.getElementsByClassName('blog_post');
  // get the empty blog slot
  var new_blog = blog_list[first_empty];
  // set it's display value to block instead of none
  // this means it will display on screen now
  new_blog.style.display= 'block';
  // get the children elements
  new_blog = new_blog.children;
  // set the values of the empty blog spot to those submitted values
  new_blog[0].innerHTML = title;
  new_blog[1].innerHTML = date;
  new_blog[2].innerHTML = text;
}
