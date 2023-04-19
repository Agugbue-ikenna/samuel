const FIREBASE = 'https://quotes-42704-default-rtdb.firebaseio.com';


//FETCHING DATA FROM THE BACKEND
export async function getAllQuotes() {
    const response = await fetch(`${FIREBASE}/quotes.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'could not fetch quotes.');
    }
    const transformedQuotes = [];

    for (const key in data) {
        const quoteObj = {
            id: key,
            ...data[key],
        };
        transformedQuotes.push(quoteObj);
    }
    return transformedQuotes;
}
export async function getSingleQuotes(quoteId) {
    const response = await fetch(`${FIREBASE}/quotes/${quoteId}.json`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'could not fetch quote. ')
    }
    const loadedQuote = {
        id: quoteId,
        ...data,
    };

    return loadedQuote;
}

export async function addQuotes(quoteData) {
    const response = await fetch(`${FIREBASE}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'content-type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'could not create quote. ')
    }

    return null;
}



//ADDING AND GETTING THE COMMENT DATA
export async function addComments(requestData) {
    const response = await fetch(`${FIREBASE}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'content-type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'could not add comment. ')
    }

    return { commentId: data.name };
}



export async function getComments(quoteId) {
    const response = await fetch(`${FIREBASE}/comments/${quoteId}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments.');
    }

    const transformedComments = [];

    for (const key in data) {
        const commentObj = {
            id: key,
            ...data[key],
        };

        transformedComments.push(commentObj);
    }

    return transformedComments;
}






















