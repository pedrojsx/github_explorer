const repositoryName = 'umbriel'

export function RepositoryList () {
  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in ReactJS</p>

          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>Unform</strong>
          <p>Forms in ReactJS</p>

          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>Unform</strong>
          <p>Forms in ReactJS</p>

          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  )
}