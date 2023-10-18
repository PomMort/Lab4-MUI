import React from "react";
import { Tabs, Tab, AppBar } from '@material-ui/core'
export default function News() {
    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        console.warn(val)
        setValue(val)
    }
    return (
        <div>
            <AppBar position='static'>
                <Tabs value={value} onChange={handleTabs}>
                    <Tab label="News 1" />
                    <Tab label="News 2" />
                    <Tab label="News 3" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <h2>One Piece Netflix live-action series gets huge post-WGA strike update</h2>
                <img className="img-news" src="assets/image/OP.jpg" alt="" />
                <h6 className="details-news">
                    <p>
                        A second season of Netflix’s live-action One Piece series has been announced. But the writing room received a huge update upon the
                        WGA strike concluding. In an interview with Deadline, Matt Owens, who wrote, executive produced, and serves as co-showrunner of 
                        One Piece, revealed that the writers room of the Netflix series has reopened. “We did start our Season 2 writers rom for a little 
                        bit before the strike,” Owens revealed. “We didn’t get much further than starting to plan out what the season is going to be and 
                        got a couple of outlines done. But that’s as far as we got. So there are not actually any scripts for the season that are done. 
                        It’s still going to take some time.”
                    </p>
                    <p>
                        “The writers room is up and running, yes, getting scripts done so that we can get into design work, scheduling and pre-production,
                        all of that kind of stuff,” he added. One Piece was Netflix’s live-action take on the iconic manga. Eiichiro Oda created the manga
                        in 1997, and over 100 volumes have been released to date. In addition to the manga, an animated series has been running since 1999.
                    </p>
                </h6>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <h2>Ant-Man and the Wasp: Quantumania’ Marches to $120M Box Office Opening</h2>
                <img className="img-news" src="assets/image/Ant.jpg" alt=""/>
                <h6 className="details-news">
                    <p>
                        Marking the first studio event pic of 2023, the third film in Marvel Studios and Disney’s stand-alone superhero series is headed
                        for a franchise-best domestic debut of $120 million at the Presidents Day box office, including $105.5 million for the three days.
                    </p>
                    <p>
                        Overseas, the Marvel pic collected $121.3 million for an early global start of $241.3 million. One sore spot was China, where the
                        movie collected a tepid $19.2 million, far less than the previous two installments.
                        It is the first Marvel and Disney movie to get a day-and-date release in the Middle Kingdom since Avengers: Endgame in 2019, and
                        there’s concern the brand may have lost its sheen, or that the overall appetite for Hollywood superhero fare has waned.
                    </p>
                </h6>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h2>John Wick 4 delayed to 2023</h2>
                <img className="img-news" src="assets/image/JW.jpg" alt=""/>
                <h6 className="details-news">
                    <p>
                        John Wick: Chapter 4 will be a little late. The fourth chapter in Keanu Reeves and director Chad Stahelski’s action franchise will
                        now hit movie theaters on March 24, 2023, Lionsgate announced in a YouTube video published Wednesday.
                    </p>
                    <p>
                        That’s a 10-month delay for the fourth John Wick movie. Chapter 4 was previously slated for release on May 27, 2022 — and that was
                        after a previous yearlong delay for the film. Its original release date was May 21, 2021, the same day The Matrix Resurrections was
                        originally supposed to arrive, before COVID-19 messed up literally everything. (In an apparent nod to all that Keanu movie release
                        date shenanigans, John Wick: Chapter 4’s latest teaser features a T. Anderson being removed from the bounties board, seemingly a
                        reference to Keanu’s in-Matrix persona.) Now that The Matrix Resurrections is out, it’s also time to get an update on the Baba
                        Yaga’s next steps, apparently.
                    </p>
                </h6>
            </TabPanel>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && (
                    <p>{children}</p>
                )
            }
        </div>
    )
}
