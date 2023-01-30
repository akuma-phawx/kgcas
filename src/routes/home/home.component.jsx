import './home.styles.scss';
import Doodle from '../../components/doodle/doodle.component';
const Home = () => {
  // Custom rule for css-doodle for the rain effect on the background.
  const doodleRule = `   :doodle {
    @grid: 1x3 / 100%;
    position: absolute;
    top: 0; left: 0;
      overflow: hidden;

    z-index: 0;
  }

  @size: 100% 130%;
  position: absolute;
  background: @m(70, (linear-gradient(transparent, @p(#ffbb00@repeat(2, @p([0-9a-f])), #15ff00@repeat(2, @p([0-9a-f]))))
  @r(0%, 100%) @r(0%, 100%) /
  @r(2px) @r(13vmin)
  no-repeat
  ));

  will-change: transform;
  animation: f 40s linear calc(-20s / @size() * @i()) infinite;
  @keyframes f {
    from { transform: translateY(-100%) }
    to { transform: translateY(100%) }
  } `;

  return (
    <div className="home-container">
      <Doodle rule={doodleRule} />
      <div className="welcome-container">
        <h1>
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </h1>
        <p>to</p>
        <h2>KanonGaming Casino</h2>
      </div>
    </div>
  );
};
export default Home;
