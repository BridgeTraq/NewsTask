import React from 'react'
import StoriesPage1 from './StoriesPage1'
import StoriesPage2 from './StoriesPage2'
import BuletinStories from './BuletinStories'
import MustRead from './MustRead'
import EditorsPick from './EditorsPick'
import BusiSport from './BusiSport'
import TopCreator from './TopCreator'
import FirstUpdate from './FirstUpdate'


export default function Stories() {

    return (
        <div>
            <StoriesPage1 />
            <StoriesPage2 />
            <BuletinStories />
            <MustRead />
            <EditorsPick />
            <BusiSport />
            <TopCreator />
            <FirstUpdate />
        </div>
    )
}
