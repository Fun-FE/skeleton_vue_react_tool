import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import style from './index.css';

function Content () {
    return <div className="content" />
}

export default function BillSkeleton (){
    const list = new Array(4).fill()
    return (<div className="skeleton a">
        {list.map((data, index) => {
            return <div className="list" key={index + ''}>
                <Content />
            </div>
        })}
    </div>)
}

export const styleString = `<style>${style}</style>`;
export const markup = `${renderToStaticMarkup(<BillSkeleton/>)}`;



