import PetstoreYaml from "./petstore"

export default function(system) {

  setTimeout(() => {
    // load local file
    system.specActions.updateSpec(PetstoreYaml)

    require('fs').readFile("/Users/horie/code/swagger/swagger-editor/config/test.yaml", 'utf8', (err, data) => {
      console.log(__dirname);
      console.log(data);
    });

  }, 0);

  return {
    statePlugins: {
      spec: {
        wrapActions: {
          updateSpec: (ori) => (...args) => {
            let [spec] = args
            ori(...args)
            //saveContentToStorage(spec)
            console.log("hogehoge");
          }
        }
      }
    }
  }
}
