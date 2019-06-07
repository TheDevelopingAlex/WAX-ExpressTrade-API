*******************
Setup
*******************

We want to split up the implementation into 2 main parts

Backend (Server)
=================

| So the server (also called backend) should handle all our requests made to the WAX ExpressTrade API.
| You may wonder why we should do that because we could make our requests through the frontend (Website) as well. There are a couple of reasons starting with

1. You need some kind of server to host your website
    - If you have a more static site, a simple `Apache <https://httpd.apache.org/>`__ or `NGINX <https://www.nginx.com/>`__ server will probably do it
    - But this tutorial focuses more on developing a web app and less on a static website
    - Creating your own simple HTTP server will give you more flexibility

2. The VGO API Key
    - | As mentioned in the previous section we need the VGO API Key for most of our requests. So if you want to make a request, for example to initiate a case opening, you would need the API Key of course.
      | **Keep in mind that you do not want to share you API Key with others, because it is linked to your website and website name.**
      | If you make your requests through the frontend (website) you have to save your API Key to the HTTP request which means it is public and everybody can abuse it.
      | You need to make sure your server works as a middleware between the WAX ExpressTrade API and your frontend (website).


Frontend (Website)
==================

| So the frontend (website) will be completely up to you. How you design it, how your animations will work, how you will implement the requests.
| Here are some recommendations you could use to make an advanced, progressive web app

1. The most known and common framework `React <https://reactjs.org/>`__
    - easy to start and learn
    - lot's of free tutorials on YouTube (Check out `Traversy Media <https://www.youtube.com/user/TechGuyWeb>`__ for excellent and detailed tutorials)
    - Direct links to the tutorial `React JS Crash Course <https://www.youtube.com/watch?v=A71aqufiNtQ>`__ and a playlist about `Learning React <https://www.youtube.com/watch?v=vYldnghykaU&list=PLillGF-RfqbbKWfm3Y_RF57dNGsHnkYqO>`__

2. Another great frontend framework `Angular <https://angular.io/>`__
    - Nearly same features as `React <https://reactjs.org/>`__ but everything in TypeScript instead of JavaScript
    - Video `Angular In 60 Minutes <https://www.youtube.com/watch?v=KhzGSHNhnbI>`__

3. `Vue.js <https://vuejs.org/>`__

4. Very simple and old school with plain JavaScript and `jQuery <https://jquery.com/>`__ (not recommended for progressive web apps)
