const Get: (url: string) => MethodDecorator = (url: string) => {
  return (target, key, descriptor: PropertyDescriptor) => {
    console.log(target, key);
    const callback = descriptor.value;
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        if (callback) {
          callback(resJson, {
            status: 200,
            success: true,
          });
        }
      })
      .catch((e) => {
        if (callback) {
          callback(e, {
            status: 505,
            success: false,
          });
        }
      });
  };
};

class Controller {
  constructor() {}
  @Get('https://catfact.ninja/facts')
  getList(res: unknown, resStatus: { status: number; success: boolean }) {
    console.log(res);
  }
  // equivalent codes of 2 lines of code above
  // Get(getList)

  @Get('https://catfact.ninja/facts')
  getList2(res: unknown, resStatus: { status: number; success: boolean }) {
    console.log(res);
  }
}
