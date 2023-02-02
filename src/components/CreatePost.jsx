import React, { useState } from "react";
import "../styles/CreatePost.css";
import infoCircle from "../assets/information-circle.svg";
import FileUpload from "./FileUpload";
import SliderInput from "./SliderInput";
import SocialMedia from "./SocialMedia";
import arrowRight from '../assets/arrow-right.svg'

const CreatePost = () => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(160);

  const handleChange = event => {
    const newText = event.target.value;
    const characters = newText.length;

    if (characters <= 160) {
      setText(newText);
      setRemaining(160 - characters);
    }
  };

  return (
    <section className="post">
      <h2 style={{ color: "#2F327D", marginLeft: '1em', marginTop: '1em' }}>Create post</h2>

      <div className="text__area">
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em", gap: '2em' }}>
          Post Description
          <img src={infoCircle} alt="info-circle" className="info-circle" />
          <span style={{ marginLeft: "3em" }}>{remaining}/160</span>
        </p>

        <textarea defaultValue={text} onChange={handleChange} className={remaining !== 0 ? 'text_area' : 'red-outline'} />
      </div>

      <div className="media-content">
        <p>
          Media Content
          <img src={infoCircle} alt="info-circle" className="info" />
        </p>

        <FileUpload />
      </div>

      <div className="tone">
        <p className="tone_voice">Tone of voice <span>0/3</span></p>
        <select>
            <option value="tone1">Tone 1</option>
            <option value="tone2">Tone 2</option>
            <option value="tone1">Tone 3</option>
        </select>

        <div className="tone_select">
            <div>
                <p>Tone 1<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 2<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 2<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>
        </div>

        
      </div>

      <div className="tone">
        <p className="tone_voice">Tone of voice <span>0/3</span></p>
        <select>
            <option value="tone1">Tone 1</option>
            <option value="tone2">Tone 2</option>
            <option value="tone1">Tone 3</option>
        </select>

        <div className="tone_select">
            <div>
                <p>Tone 1<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 2<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 2<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 4<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>

            <div>
                <p>Tone 5<span style={{ fontSize: '.8em', height: '15px', width: '15px', borderRadius: '50%', textAlign: 'center', backgroundColor: 'gray', cursor: 'pointer' }}>x</span></p>
            </div>
        </div>

        
      </div>

      <div className="placeholders">
        <p>Place Holder</p>
        <SliderInput />
      </div>

      <div className="social">
        <p>Select Social Media</p>

        <SocialMedia />
      </div>

      <div className="button">
        <button>Generate<img src={arrowRight} alt="arrow-right" /></button>
      </div>

    </section>
  );
};

export default CreatePost;
