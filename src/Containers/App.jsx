import React, { Component, Fragment } from 'react'
import { Parallax } from 'react-spring'
import Card from '../Components/Card'
import MarkdownRenderer from '../Components/MarkdownRenderer'
import data from '../data/data.fr.yml'

const BackgroundGradients = () => (
  <Fragment>
    <Parallax.Layer
      id="page-1"
      offset={0}
      speed={0}
      style={{ background: 'linear-gradient(black, Indigo)' }}
    />
    <Parallax.Layer
      id="page-2"
      offset={1}
      speed={0}
      style={{ background: 'linear-gradient(Indigo, DeepSkyBlue)' }}
    />
    <Parallax.Layer
      id="page-3"
      offset={2}
      speed={0}
      style={{ background: 'linear-gradient(DeepSkyBlue, yellow)' }}
    />
    <Parallax.Layer
      id="page-4"
      offset={3}
      speed={0}
      style={{ background: 'linear-gradient(yellow, ForestGreen)' }}
    />
    <Parallax.Layer
      id="page-5"
      offset={4}
      speed={0}
      style={{ background: 'linear-gradient(ForestGreen, SaddleBrown)' }}
    />
  </Fragment>
)
class App extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={5}>
        <BackgroundGradients />
        <Parallax.Layer offset={0} speed={0.5} style={style}>
          <Card>
            <h1>{data.name}</h1>
            <p>{data.bio.long}</p>
          </Card>
        </Parallax.Layer>
        <Parallax.Layer offset={1} speed={0.5} style={style}>
          <Card>
            <h1>Skills</h1>
            <ul>
              {data.skills.map(skill => (
                <li key={skill['fa-name']}>{skill.name}</li>
              ))}
            </ul>
          </Card>
        </Parallax.Layer>
        <Parallax.Layer offset={2} speed={0.5} style={style}>
          <Card>
            <h1>Work</h1>
            <ul>
              {data.jobs.map(job => (
                <li>
                  {job.name} - {job.company}
                </li>
              ))}
            </ul>
            <h1>School</h1>
            <ul>
              {data.formations.map(formation => (
                <li>
                  {formation.name} - {formation.localisation}
                </li>
              ))}
            </ul>
          </Card>
        </Parallax.Layer>
        <Parallax.Layer offset={3} speed={0.5} style={style}>
          <Card>Projects</Card>
        </Parallax.Layer>
        <Parallax.Layer offset={4} speed={0.5} style={style}>
          <Card>
            <h1>About me</h1>
            <MarkdownRenderer source={data.aboutme} />
          </Card>
        </Parallax.Layer>
      </Parallax>
    )
  }
}

export default App
