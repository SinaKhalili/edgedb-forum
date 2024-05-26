# EdgeDB Forum

This is a forum built with Next.js and EdgeDB for the EdgeDB hackathon!
It's hosted on Vercel and uses the EdgeDB cloud for the database.

## Installation

To get started, clone the repository and install the dependencies:

```bash
yarn
edgedb project init
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In this hackathon project, my friend @wingleeio and I set out to build one of the web's timeless applications: a forum. Our journey began after watching Theo's video about EdgeDB, which piqued our curiosity. Visiting EdgeDB's website, we saw the hackathon banner and thought, "Why not give it a shot?"

The Initial Impressions
We started by exploring the EdgeDB UI, and let me tell you, it was an impressive experience. The interface is sleek, intuitive, and a joy to navigate. But the real gem is defs the query language. I’m usually skeptical about yet another query language, but EdgeQL hits the mark perfectly. It's sophisticated yet user-friendly—a true endgame query language.

Diving into the Project
With our newfound enthusiasm, we dove into the project. We chose Next.js and used this opportunity to experiment with server functions. Although EdgeDB offers a robust TypeScript library, we were so enamored with the query UI that we decided to use raw EdgeQL queries within the server functions. The results were fantastic.

Take a look at this elegant query we used to handle post slugs:

```ts
    with
        posts := (select Post filter .title ilike <str>$title),
        post_count := count(posts),
        new_slug := <str>$slug ++ '-' ++ <str>post_count
    select (insert Post {
        title := <str>$title,
        content := <str>$content,
        category := <Category><uuid>$category,
        slug := if post_count > 0 then new_slug else <str>$slug
    }) {
      id,
      slug
    }
```
 
Implementing OAuth
We also leveraged EdgeQL for OAuth, using built-in providers for GitHub and Discord. While we had to tweak the suggested callback URL to include a port number. We even got email authentication working with Resend, although that required a bit more configuration.

The Forum Features
Our forum, though basic, covers all the essentials: categories, posts, and comments. We also implemented pagination, adjustable through query parameters.

Reflecting on the Experience
Building this project was a rewarding experience. EdgeDB's query language and UI exceeded our expectations, making the development process enjoyable and efficient. Kudos to the EdgeDB team for organizing the hackathon and to
prestigious triumvirate of our CEO judges for taking the time to review our project.
