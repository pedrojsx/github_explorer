import { Counter } from './components/counter'
import { RepositoryList } from './components/repository-list'
import './styles/global.scss'

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}
