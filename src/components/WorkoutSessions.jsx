import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        We believe in providing you with the best workouts to achieve your fitness goals. Whether you’re a beginner or a seasoned athlete, our top workouts cater to all levels and preferences.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Are you ready to transform your fitness routine? Our Featured Bootcamp at our gym is designed to challenge and inspire you, no matter your fitness level. Combining strength training, cardio, and team spirit, this program offers a unique workout experience that pushes you to your limits while keeping it fun!
        </p>
        <div className="bootcamps">
          <div>
            <h4> Dynamic Workout:</h4>
            <p>
            Each session features a mix of high-intensity drills, functional movements, and strength exercises to ensure you get a full-body workout. Expect to sweat, burn calories, and build muscle!
            </p>
          </div>
          <div>
            <h4>Expert Coaching:</h4>
            <p>
            Led by our certified trainers, our bootcamp sessions are structured to maximize results. You’ll receive personalized guidance and modifications to ensure everyone can participate safely and effectively.
            </p>
          </div>
          <div>
            <h4>Community Vibe: </h4>
            <p>
            Join a supportive group of fellow fitness enthusiasts! Our bootcamp fosters camaraderie, motivation, and friendly competition. You’ll make new friends and share in each other’s successes!
            </p>
          </div>
          <div>
            <h4>Flexible Schedule: </h4>
            <p>
            With classes offered [insert class times/days], you can easily fit bootcamp into your busy lifestyle. Whether you prefer morning sessions or evening workouts, we’ve got you covered!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
