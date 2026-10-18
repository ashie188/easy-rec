import React,{useState} from "react";

export default function Home() {
    const [running,Setrunning] =useState(false);

    function startrecording(){
        if(running) return;

        //recording using mediastream api
        const video=navigator.mediaDevices.getDisplayMedia();
        const sound=navigator.mediaDevices.getUserMedia();

    }
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-card">
          <h2>Record your screen & microphone</h2>
          <p>
            easy-Rec allows you to record your screen with mic audio, trim
            unnecessary parts, and generate a shareable video link — directly
            from your browser.
          </p>

          <div className="controls">
            <button onClick={startrecording} className="btn primary">Start Recording</button>
            <button className="btn danger">Stop Recording</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Screen + Mic</h3>
          <p>
            Capture display and microphone audio simultaneously using the
            MediaRecorder API.
          </p>
        </div>

        <div className="feature">
          <h3>Trim Video</h3>
          <p>Remove unwanted sections before exporting using FFmpeg.</p>
        </div>

        <div className="feature">
          <h3>Share Easily</h3>
          <p>Upload your final video and generate a shareable link.</p>
        </div>
      </section>
    </main>
  );
}
