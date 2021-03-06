# React Startpage

___

This is a small side project of mine to build a personalized startpage for my browser. I've built it in React with the goal of building one thing a week in React, so while it may be slightly overkill, at least there's a reason. .-.

### Features

  - Adaptive sidebar that autofills based on JSON file and how you want to arrange your components.
  - Smart search bar that automatically determines whether you've put in a link or a search query.
  - Uh, pretty background I guess?

##### WiP / Upcoming Features

  - Selections to snag a new image from alphacoders / unsplash on every load, depending on your preference
  - Populate sidebar entirely from JSON file, no component tweaking needed.
  - Local weather, clock, and potentially todo list because why not.

___
  
## How to Use

<img src="/exGif/search.gif?raw=true" width="720px">

This startpage is very simple - once you load it up, the search bar is automatically focused for you to start typing. Anything that's not explicitly a URL will be google'd - any URL's will load in on the same tab.

<img src="/exGif/sidebar.gif?raw=true" width="720px">

Clicking on any of the sections on the left hand side will expand their relevant links. Clicking inside of the bar but not on a link will close the bar.


### How to Install

Start by cloning the repo.

```SSH
git clone https://github.com/cipherbeta/react-startpage
```

Then, install dependencies.

```SSH
npm install
```

Finally, make your tweaks. If you want an active testing environment, run two commands. The first is a live server so you can see your updates in real time. The latter watches `src/scss` for changes and outputs compiled CSS to `public/css`.

```SSH
npm start
npm run sass
```

Once you've made you changes, you're going to want to build it. This outputs a build folder that you can hook up to your browser of choice as a start / new tab page.

```SSH
npm run build
```

### How to Customize

To change any sidebar 'sections', there's two things that you're going to want to change. First off, you've got the links inside the sidebar sections. Go ahead and take a look at `src/data.json`. You'll see two key/value pairs, one for backgrounds (work in progress) and one for links. Take a peek at the links key pair at the moment. It's an object with a few other objects, which in turn have an array filled with objects that have two key pairs - `name` and `url` respectively. Name here refers to the actual text in the link. Say if you wanted to go to Google.com, you'd put the `name` value to "Google". The URL key refers to the actual URL - i.e. `https://google.com`. Replace these keys or add in more of your own to update the sidebars as you like.

Now that we've got the URL's fixed up, we've got to update a component. Take a look at `src/components/sidebar.js`. You'll notice a few `SidebarItem` components inside the return statement. You'll notice that each one takes two props - a type, and a name. The type refers specifically to the key of the aforementioned array that you saw in `data.json`. To fill this automatically with the links that you've put together in `data.json`, just set the type prop as `props.linkData.YOURKEY`. Name here refers to the actual text on the sidebar. Simply change it to fit your needs.

To change the background, just add the background of your choice in `public/img/bg/` and name it `mbg1.jpg`. It's going to get better later, but that's what you've got for now.