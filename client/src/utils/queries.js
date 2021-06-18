import gql from 'graphql-tag';

export const GET_ME = `
    {
        me  
            username
            email
            bookCount
            _id
            savedbooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;