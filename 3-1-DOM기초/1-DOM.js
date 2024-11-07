/*
    <html>
      <head>
      <body>
        <section>
          <ul>
            <li>양파</li>
            <li>피망</li>
          </ul>
        </section>
      </body>
      </head>
    </html>
*/

const liTag ={
  tagName:'li',
};

const ulTag ={
  tagName: 'ul',
};

const sectionTag ={
  tagName:'section',
};

const bodyTag = {
  tagName:'body',
  children: [sectionTag],
  parent
};

const htmlTag = {
  tagName: 'html',
  children: [bodyTag]
};