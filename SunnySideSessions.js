import { useState } from 'react';

export default function SunnySideSessions() {
  const [tune, setTune] = useState("On the Sunny Side of the Street");
  const [weekComplete, setWeekComplete] = useState(false);
  const [listeningLog, setListeningLog] = useState([false, false, false]);
  const [session1Done, setSession1Done] = useState(false);
  const [session2Done, setSession2Done] = useState(false);

  const recordings = [
    { artist: "Louis Armstrong", link: "https://www.youtube.com/watch?v=_5eSmWmZ2_I" },
    { artist: "Ella Fitzgerald & Count Basie", link: "https://www.youtube.com/watch?v=4w74XUjJLG0" },
    { artist: "Sonny Stitt", link: "https://www.youtube.com/watch?v=f6d9jDdbOjE" },
    { artist: "Dexter Gordon", link: "https://www.youtube.com/watch?v=9JzUcDLjHpc" },
  ];

  const toggleLog = (index) => {
    const updated = [...listeningLog];
    updated[index] = !updated[index];
    setListeningLog(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Sunny Side Sessions</h1>

      <section>
        <h2>This Week's Tune</h2>
        <p>{tune}</p>
      </section>

      <section>
        <h2>Commute Listening Log</h2>
        {recordings.map((rec, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <a href={rec.link} target="_blank" rel="noreferrer">{rec.artist}</a>
            <input
              type="checkbox"
              checked={listeningLog[index] || false}
              onChange={() => toggleLog(index)}
            />
          </div>
        ))}
      </section>

      <section>
        <h2>Practice Sessions</h2>
        <label>
          <input
            type="checkbox"
            checked={session1Done}
            onChange={() => setSession1Done(!session1Done)}
          /> Session 1: Melody + Harmony
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={session2Done}
            onChange={() => setSession2Done(!session2Done)}
          /> Session 2: Bebop Language + Integration
        </label>
      </section>

      <button
        onClick={() => setWeekComplete(true)}
        disabled={!session1Done || !session2Done}
        style={{ marginTop: '1rem', padding: '0.5rem', background: '#333', color: '#fff' }}
      >
        Mark Week Complete
      </button>

      {weekComplete && <p style={{ color: 'green', marginTop: '1rem' }}>Week Complete! Ready for your next tune.</p>}
    </div>
  );
}