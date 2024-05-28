import "../assets/Componets/Story.css";

const Story = () => {
  return (
    <section className="story-local-fashion">
      <div className="story-images">
        <div className="image">
          <img src="/landingpage/image1.png" alt="Fashion 1" />
        </div>
        <div className="image">
          <img src="/landingpage/image2.png" alt="Fashion 2" />
        </div>
        <div className="image">
          <img src="/landingpage/image3.png" alt="Fashion 3" />
        </div>
        <div className="image">
          <img src="/landingpage/image4.png" alt="Fashion 4" />
        </div>
      </div>
      <div className="story-text">
        <h1>The Story of A Local Fashion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
          vestibulum arcu in dignissim. Mauris convallis vitae urna quis mattis.
          Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc
          eget feugiat lorem. Donec tellus justo, porttitor eu cursus cursus,
          pellentesque ut quam. Curabitur at arcu.
        </p>
      </div>
    </section>
  );
};

export default Story;
