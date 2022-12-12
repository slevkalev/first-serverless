exports.handler = async function () {
  return {
    statsCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  }
}
