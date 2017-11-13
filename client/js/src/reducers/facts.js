const initialState = [
    {
        id: 1,
        category: 'general',
        fact: 'People say "Bless you" when you sneeze because when you sneeze,your heart stops for a mili-second.'
    },
    {
        id: 2,
        category: 'general',
        fact: 'It is physically impossible for pigs to look up into the sky.'
    },
    {
        id: 3,
        category: 'general',
        fact: 'More than 50% of the people in the world have never made or received a telephone call.'
    },
    {
        id: 4,
        category: 'general',
        fact: 'Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.'
    },
    {
        id: 5,
        category: 'general',
        fact: 'The cigarette lighter was invented before the match.'
    },
    {
        id: 6,
        category: 'general',
        fact: 'Thirty-five percent of the people who use personal ads for dating are already married.'
    },
    {
        id: 7,
        category: 'general',
        fact: 'A duck\'s quack doesn\'t echo, and no one knows why.'
    },
    {
        id: 8,
        category: 'general',
        fact: 'Like fingerprints, everyone\'s tongue print is different.'
    },
    {
        id: 9,
        category: 'general',
        fact: 'Every year about 98% of atoms in your body are replaced.'
    },
    {
        id: 10,
        category: 'general',
        fact: 'Only one satellite has been ever been destroyed by a meteor: the European Space Agency\'s Olympus in 1993.'
    },
    {
        id: 11,
        category: 'general',
        fact: 'Sound travels 15 times faster through steel than through the air.'
    },
    {
        id: 12,
        category: 'general',
        fact: 'There are more than fifty different kinds of kangaroos.'
    }
];

export default function facts(state = initialState, action) {
    if (action.type === 'ADD_FACT') {
        return [...state, action.payload]
    }else if(action.type === 'REMOVE_FACT'){

    } else if (action.type === 'GET_FACTS') {
        return state;
    }
    return state
}