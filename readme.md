# React frontend assignment 

> Technical Aspects - Mahyar Jamalabadi 

## Design

- As I believe, we better do not implement any application or a single feature without deep think into design, So I tried to make UI more neat and well-formed in limited time-frame I had.

- Typography, spacing and alignments can help finding things on the screen, so I tried to put `titles` and `buttons` very carefully with specific positioning.

## Experience

- As the user needs to browse highly crowded tables and grids, we at least should make other things as hidden as possible will user going through the tables to improve readability and user experience.

- User simply can switch between categories to see, browse and fetch related data.

- Showing the number of upcoming data through the API helps user to find out how many data could be achievable through fetching.

- Prevent more loading when we know there is no more data like `NO MORE DATA TO FETCH` helps false experiences about API bugs or fetching problems.

## Quality

- I separate the components as much as they could make tests simpler and prevent complication. 

- Assigning proper `data-testid` to components can help us find the components among bunch of others. 

- I tried to extract `reusable` custom hooks to make the inside component logic more simple and easy to understand.

- Also extracting utility functions as `utils` could make things cleaner and also help us to separately test the utility functions themselves.

## Production

- In a real and bigger projects with reasonable timing, I try to add more tests, specially `integration tests` to make sure of what is happening during complicated renderings.

- Currently I hide the different grids and their data while we switching between categories of history lists, because I didn't want to consume more time in handling `stores` or `caching` things similar. But in real world and more complex data categories we have to try to `unmount` completely everything that is not available to be seen.

- Also handling `URL` changing on switching between grids can help referencing and later direct access, but here that was completely time consumer and over-engineering.

- I large scale projects, I'll think more deeply to handle `searching` categories to help people finding their needs and minimize selections and more complicated styling to layout to improve positioning of category options.
