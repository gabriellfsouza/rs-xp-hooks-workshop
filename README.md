## React Hooks

github.com/jpdemagalhaes

### O que são?

- Acessar estado do componente sem ter uma classe
- Funções para acessar os states do React
- Há casos que hooks não substituem os components

#### Vantagens

- Diminui o tamanho do bundle
- Não tem mais HoC
- Para Redux não precisamos mais usar os HoCs
- Possibilita a migração gradativa de componentes para Hooks, pois foi pensada para ser retrocompatível

### Hooks mais comuns

- useState
- useEffect (gerenciador de eventos dentro dos hooks)

### Hooks mais específicos

- useContext
  Basicamente compartilha states/dados entre componentes pais e filhos
  (tema light ou dark -> o meu subcomponente precisa saber qual é o estado do pai, sem precisar configurar o redux)

Criamos um context no pai da aplicação, criamos um consumer e não precisamos mais criar um prop dreaming.

Não mata o Redux, mas já tiramos a necessidade de usarmos o Redux para aplicações pequenas

- useMemo/useCallback -> usado para não efetuar cálculos para os mesmos parâmetros.
  Valores memorizados -> me permite não precisar calcular o mesmo valor para cada execução
  Se a função for executada com os mesmos parâmetros, o react pega do próprio cache.

- useRef -> pega referencias dos campos para pegar valores e operações que queremos fazer.
  os que não usam, o componente pega um setstate e acaba ficando menos performáticos.

como conseguimos alterar o estado de uma propriedade usando a referência do componente?
sobrescrever o setValue do componente de máscara e atualizar por referência

- useLayoutEffect
  é bem parecido com o useEffect, mas o useEffect não para a renderização da página.
  o useLayoutEffect é executado antes do layout da página (ele bloqueia a renderização da tela).

- useReduxer -> é inferior ao redux

- useContext só serve para usar o valor de um contexto (ele não altera)
