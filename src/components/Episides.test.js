import React from 'react'
import {render, getAllByTestId, getByTestId} from '@testing-library/react'
// import fetchShow from '../api/fetchShow'
import Episodes from './Episodes'
// import testData from './testData'


test('re-renders correctly with list of missions', ()=>{
    //arrange (rennder the components and set up mock data)
    const {rerender,queryAllByTestId} = render(<Episodes episodes={[]}/>)

    const initialEpisode = queryAllByTestId(/episode/i)
    expect(initialEpisode).toHaveLength(0)
    expect(initialEpisode).toStrictEqual([])

    rerender(<Episodes error="" episodes={testData}/>)
    
    const episode = queryAllByTestId(/episode/i)
    expect(episode).toHaveLength(2)



})

const testData = [{
    "id":578664,
    "url":"http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
    "name":"Chapter Three: Holly, Jolly",
    "season":1,
    "number":3,
    "airdate":"2016-07-15",
    "airtime":"",
    "airstamp":"2016-07-15T12:00:00+00:00",
    "runtime":60,
    "image":{
       "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
       "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
    },
    "summary":"<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
    "_links":{
       "self":{
          "href":"http://api.tvmaze.com/episodes/578664"
       }
    }
 },
 {
    "id":578264,
    "url":"http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
    "name":"Chapter Three: Holly, Jolly",
    "season":1,
    "number":3,
    "airdate":"2016-07-15",
    "airtime":"",
    "airstamp":"2016-07-15T12:00:00+00:00",
    "runtime":60,
    "image":{
       "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
       "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
    },
    "summary":"<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
    "_links":{
       "self":{
          "href":"http://api.tvmaze.com/episodes/578664"
       }
    }
 }
]
//mock data
//import data