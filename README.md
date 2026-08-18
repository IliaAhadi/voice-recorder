# Voice Recorder App

A simple and intuitive voice recorder application built with **React**, **Tailwind CSS**, and other useful libraries. This app allows users to record audio, visualize the waveform, and play back the recording.

## Features

- **Audio Recording**: Record audio directly from your device’s microphone.
- **Waveform Visualization**: View live waveform visualization during recording.
- **Audio Playback**: Listen to the recorded audio.
- **Modern UI**: Stylish interface powered by **Tailwind CSS**.
- **Notifications**: Use **React Hot Toast** for user-friendly notifications.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for custom styles.
- **react-audio-visualize**: For visualizing the audio waveform in real-time.
- **react-audio-voice-recorder**: React component to record audio from the microphone.
- **react-h5-audio-player**: For playing the recorded audio.
- **react-icons**: Provides a wide selection of customizable icons.
- **react-router-dom**: For navigation between pages (if applicable).
- **react-hot-toast**: To show interactive toast notifications.

## Installation

Follow the steps below to get your environment set up:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/voice-recorder.git
cd voice-recorder
```

### 2. Install dependencies

Make sure you have **Node.js** installed (you can download it from [here](https://nodejs.org/)).

```bash
npm install
```

or if you're using **Yarn**:

```bash
yarn install
```

### 3. Run the app

Start the development server:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

Open your browser and visit `http://localhost:3000` to see the app in action.

## Features and Functionality

### Audio Recording

The app uses **`react-audio-voice-recorder`** to access the microphone and record audio. The button triggers recording, and when recording finishes, the audio is stored for playback.

### Visualizing Audio

The **`react-audio-visualize`** library is used to create a waveform representation of the audio data. During the recording, you can see the audio's live waveform in real-time.

### Audio Playback

Once the audio is recorded, you can play it back using **`react-h5-audio-player`**, which provides an easy-to-use interface for audio controls (play, pause, stop).

### UI Design

The app’s design is responsive and styled using **Tailwind CSS**, allowing it to scale across different screen sizes.

### Notifications

**React Hot Toast** is integrated for showing simple, customizable notifications for different events, such as start, stop, and error messages during recording.

## Dependencies

### Core Dependencies

- **@tailwindcss/vite**: Tailwind CSS for Vite build.
- **react**: The core library for building UI.
- **react-audio-visualize**: For visualizing audio in real-time.
- **react-audio-voice-recorder**: React component for recording audio.
- **react-h5-audio-player**: Audio player for playback functionality.
- **react-hot-toast**: To show toast notifications.
- **react-icons**: Icons for buttons and UI elements.
- **react-router-dom**: React router for managing page navigation.
- **tailwindcss**: CSS framework used for responsive design.
- **use-local-storage**: For persisting user data in the browser’s local storage.

### Development Dependencies

- **eslint**: For linting JavaScript code.
- **prettier**: Code formatter for consistent style.
- **vite**: Build tool for fast development.
- **@vitejs/plugin-react**: Vite plugin for React support.
- **@eslint/js**, **eslint-plugin-react**, **eslint-plugin-react-hooks**, **eslint-plugin-react-refresh**: ESLint plugins for better React support.
- **prettier-plugin-tailwindcss**: Tailwind CSS integration with Prettier.

## Example of Usage

```jsx
import { useState } from "react";
import AudioRecorder from "react-audio-voice-recorder";
import { AudioPlayer } from "react-h5-audio-player";

const RecorderApp = () => {
  const [audioData, setAudioData] = useState(null);

  const onRecordComplete = (audioBlob) => {
    const audioURL = URL.createObjectURL(audioBlob);
    setAudioData(audioURL);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-bold">Voice Recorder</h1>
      <AudioRecorder onComplete={onRecordComplete} />
      {audioData && (
        <AudioPlayer
          src={audioData}
          showSkipControls={false}
          showJumpControls={false}
          autoPlay={false}
        />
      )}
    </div>
  );
};

export default RecorderApp;
```

---

### Customization

Feel free to modify the app’s design, add more features, or change the functionality based on your needs. You can use additional libraries or integrate it with backend services for storing or sharing the recordings.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: iliya.ahadi@gmail.com
- **GitHub**: [IliaAhd](https://github.com/IliaAhadi)

---

If you have any questions, feel free to open an issue or submit a pull request.

Enjoy building with React! 😄
