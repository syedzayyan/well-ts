import about from "../assets/about.png"
import { useState } from "react";
import Modal from "./Modal";

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className='btn-light' onClick={() => setIsOpen(true)}>
                <img title="About The Poject" alt="About The Poject" src={about} height={40} width={40} />
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen}>
                <h2>About</h2>
                <p>I should have chosen a more intuitive name but ughh, I have bought the domain already.</p>
                <h3>What is it?</h3>
                <p>You know well plates? I have seen people printing layouts of them and the scribbling concentration values on them? Is that intuitive? Not at all. Is that a waste of paper? Yes. And then on top of that if you were to make a presentation of the well plates for example teaching students how the colors magically change when you add trypsin to a protein. I was there once. Hence this tool(?). It lets you do all of that.</p>
                <ul>
                    <li>Make Layouts on a computer, rather than scribbling</li>
                    <li>Add text and color to the wells</li>
                    <li>Save the layouts locally, for probably future edits. (I don&#39;t want to fund or make a backend for this)</li>
                    <li>Export the wells into an Excel sheet (CSV) to maybe analyse data.</li>
                    <li>Export the layout into a picture format or SVG/PNG for a presentation maybe.</li>
                </ul>
                <h3>Things to be done for v2</h3>
                <ul>
                    <li>Make it suitable for iPad</li>
                    <li>Mobile support is not really a thing but may as well</li>
                    <li>Preferably a dark mode and support to change background color</li>
                </ul>
                If you think of anything else. May as well open a PR.
                <h3>Contributing didgeridoo</h3>
                <p>This is made using React. I used Typescript, because I hate headaches and actually I wanted to learn Typescript. Using it for a project seemed more intuitive. If you want to contribute to the code, please feel free to make a Pull Request on the Github Repo. I probably would fix it soon enough. If you find issues, again make a pull request or email me. I&#39;ll probably take some time but feel free to follow-up. I forget sometime.</p>
                <p>Also if you would like to donate, please do <a href = "https://www.buymeacoffee.com/masudzayyan">here</a></p>
            </Modal>}
        </>
    )
}