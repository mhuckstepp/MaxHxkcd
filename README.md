# A better way to view your favorite xkcd comics!

Solo project built from scratch with React, Redux, Tailwind, Node, Express and PostgreSQL.

The site loads random comics and includes infinite scroll, night mode and search.

Heroku scheduler runs a daily function to look for new comics from the xkcd API and adds them to the database.

There is also a feature for favoriting and commenting with no user authentication which I think is fun.

You can check the '/stats' page for statistics about publishing frequency and content.
