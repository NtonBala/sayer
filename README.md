# Sayer

Sayer: the world's most used time waster client app - is Empeek test task that allows user to add/delete items &
comment those items. Data is stored in browser's *Local Storage*, main technology used is a stack of *React Ecosystem*.

## Architecture

### Data Structure

Data in *Local Storage* is kept as a string and has next shape:
```javascript
[
    {
        id: "item1",
        title: "...",
        comments: [
            {
                id: "comment1",
                comment: "..."
            }
        ]
    }
]
```javascript
This shape has two nested entity types: items & comments.

*Redux store* holds only *domain data* (*entities* field) and the data is kept in normalized form
(for normalizing the data *normalzr* library is used):
```javascript
{
    entities: {
        items: {
            byId: {
                "item1": {
                    id: "item1",
                    title: "...",
                    comments: ["comment1"]
                }
            },
            allIds: ["item1"]
        },
        comments: {
            byId: {
                "comment1": {
                    id: "comment1",
                    comment: "..."
                }
            },
            allIds: ["comment1"]
        }
    }
}
```javascript
*App state* data and *UI state* data are cut down as for managing app and UI state *react-router*
*location.pathname* is used.

## Development Environment

*Create React App* package is used for development environment and in order to deploy SPA on GitHub Pages.
*ESLint* is used as a linter.
*Redux Dev Tools Extension* is used for store monitoring.

## Running

Pull master branch and run *npm install* to install all dependencies.
To launch the app run *npm start* and go to http://localhost:3000/.

## Production

Run *npm run deploy* to create production build & deploy new version of the site: https://NtonBala.github.io./sayer.
