import React from 'react';

const Pika = () => {
  return (
    <td className="organizecardsB">
      <div className="nameimageinfo yellow">
        <table className="nameheaders">
          <tbody>
            <tr>
              <td className="basic" colSpan={3}>
                Basic Pokémon
              </td>
            </tr>
            <tr>
              <td className="nameofanimal">Pikachu</td>
              <td className="hp">40 HP</td>
              <td className="typesign"> ☻ </td>
            </tr>
          </tbody>
        </table>
        <img
          src="https://heatherketten.files.wordpress.com/2018/03/my_pikachu.gif"
          alt="Pikachu"
        />
        <br />
        <div className="infoonly">
          <p className="description">
            Mouse Pokémon. Length: 1'4", Weight: 13 lbs.
          </p>
          <table className="stats">
            <tbody>
              <tr>
                <td className="energy">☻</td>
                <td className="attackdescCENTER">
                  <span className="label">Gnaw</span>
                </td>
                <td className="damage">10</td>
              </tr>
            </tbody>
          </table>
          <table className="stats">
            <tbody>
              <tr>
                <td className="energy">☻ ☻</td>
                <td className="attackdesc">
                  <span className="label">Thundershock</span>{' '}
                  <span className="labeltext">
                    Flip a coin. If tails, Pikachu does 10 damage to itself.
                  </span>
                </td>
                <td className="damage">20</td>
              </tr>
            </tbody>
          </table>
          <table className="costs">
            <tbody>
              <tr className="costheaders">
                <td>weakness</td>
                <td>resistance</td>
                <td>retreat cost</td>
              </tr>
              <tr className="costicons">
                <td>☻</td>
                <td></td>
                <td>☻</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li className="italicize">
              When several of these Pokémon gather, their electricity could
              build and cause lightning storms. &nbsp; LV. 12 &nbsp; #25
            </li>
            <li className="copyrights">
              <br />
              <span className="strong">Illus Mitsuhiro Arita</span>{' '}
              <span className="medium">
                ©1995, 96, 98 Nintendo Creatures, GAMEFREAK ©1999 Wizards
              </span>{' '}
              <span className="strong">58/102 ●</span>
            </li>
          </ul>
        </div>
      </div>
    </td>
  );
};

export default Pika;
