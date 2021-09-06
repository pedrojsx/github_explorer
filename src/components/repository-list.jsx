import { useState, useEffect } from 'react'
import { RepositoryItem } from './repository-item'

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList () {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(console.error)
  } , [repositories])

  // console.log(repositories)

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        { repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        }) }
      </ul>
    </section>
  )
}