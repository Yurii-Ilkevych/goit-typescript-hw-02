/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Title {
  title: string
}

class Component<T>  {
  constructor (public props:T) {

  }
}

class Page<T extends Title>  extends  Component<T>  {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};