import React from 'react';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';

export default function About() {
    return (
        <div className='about-container'>
            <Collapsible accordion>
                <CollapsibleItem
                    expanded={true}
                    header="The Film"
                    icon={<Icon>movie</Icon>}
                    node="div"
                    style={{backgroundColor: 'white'}}
                >
                    Here you can see the film card, which consist of over 100 films from all the world.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Nations"
                    icon={<Icon>place</Icon>}
                    node="div"
                    style={{backgroundColor: 'white'}}
                >
                    Typical films from many countries around the world such as America, England, France,...
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Daily news"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                    style={{backgroundColor: 'white'}}
                >
                    Providing news about hot movies, upcoming movies and many other information.
                </CollapsibleItem>
            </Collapsible>
        </div>
    );
}