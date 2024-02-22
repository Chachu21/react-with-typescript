import ShopPart from "./ShopPart";
const Home = () => {
  const images = [
    {
      id: "1x",
      name: "Hoodie 1",
      price: 34.4,
      amount: 10,
      url: "https://s3-alpha-sig.figma.com/img/72a6/9096/dcaaae738c90efc0cb799effee314f1d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EknCRdmAzbz53YnyiIi6y4JNQ~euw9ArwCJS1Dxvdaj4U-isGIyFUvIUCdbRnYMbiTQji2HLkUuzF9wSKgJ1PqQr2uVK~ep7gMwnlDkHwcO46xxwXAzyWC-uXMnbDn34oc6V9ljCloiKBjyH3i6VliUAoQ8PRSjPu6~r6ykvyhWIFGyGLKkHOMpawmVY2-EqHmaW~uRaZCfjYJmgec-YRIZPzpSiXO3wuGjO3n0F71nZPh-lLcskwrT6YTKw5RDaxBPNeNCTJQip6eRCfK~ZdeDiJUF4L-ShV-NfIr21CZQLgJbJYhN97iei6Qs7FwdHQWpWiABejFWp-1oeKkYV-w__",
    },
    {
      id: "2z",
      name: "Hoodie 2",
      price: 3.4,
      amount: 10,
      url: "https://s3-alpha-sig.figma.com/img/f553/94e5/cea8ed43dd60356e02b5d4bebb8ed031?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEDrG5lIzMW~6DxWu~DIqfSLTloFGglFsDc44eN33E3UN5cXuKoQ06s~roNfmyrUQ~dr7KGleCSfr85IGVLzi3A3mQzwGtBWq39HD0iRrt4C90An1x7h5fzhS1Qx6Dz6rBaE4oDrpw5HgDkDyTcL8nwbiWez5d9lCTP5PBVal2W0YgLvhjhQSPffL72EN5RchJkGnwdqC~Ot7JKsWWQ5jgMcyG9WGb55u5LkZT2YPEPmkv2F1dc4lh2JGI-YumYM6KcHZe0TYWfK24yQc-D2QI1WTUO4Q3h5EA5Mk-m3w5EXzumHqVbQ9RUAf~iNAqHICFaTi5gFAaH-PjInKtqNNw__",
    },
    {
      id: "3s",
      name: "Hoodie 3",
      price: 30,
      amount: 10,
      url: "https://s3-alpha-sig.figma.com/img/d6e3/b921/75231deff762c03841b4c244179c937d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-L3AXwlqjaSwvElnhAC8-BOYQ~IHDFe0jyugWvnyppJzn1cYyxVs00-x1jLU5V2pBO4Njf5Y4~xibewxeUuCQ1HhUC06XXSgBiVz1-Y6Q0kTuK8ME87tDfYgFwvVlH5PoNMp2NU89R9NltAAOhdN82ziRTMUISOlNEyNu5SVV6bD1k2B~~oeNEFvdIEj6wR0M~M7TebXqM~wlrpqt~BYbU~QftkUnZv8zEem6boR2RPkqmvt~rp2DIrjI9o0NcDsApb1YdaJnYmFRD1XPhLNE0qyhHHJ10kmEuS-4hFLe1Cio-WxEV0KT~OsOmVaE7PiHAhKU3a51SGyZhHkEzX6Q__",
    },
  ];
  return (
    <ShopPart
      gridd={images}
      headline=" hoodie heaven"
      url="https://s3-alpha-sig.figma.com/img/3895/5d40/c7625a78fd9a567afda1c14b91ddf347?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-Sd311SkQGBuwC3eit1PI7pkJf9P~~4eanMdGKWll~tksFgsN4n7hMVh7eaIBUj7C1yRVFauaICx6iEgfFqJyB0Qd-sY5Z1EUXYhvrDXdvk8m9trCNRxLcPK7GfFbXSN9dwJCvob~rNfFBLlY3KmXhQO7AW5O~zHkc35A79byKDJJv7ng70h2Gngib678JZJ-JJXVhjmBprkttM9RSqWctF4YtV0sBoPJzyAJnpTxTKP72-i79hE~Z63IZ9l4jRDXG0VxENDezbno-Ny4t8CEOgOqfqvj~IIWiH3FmYcqwut7iyy66fDUlR1F8qV4bA2RHxD4B-a6QC8QcZEwMJcg__"
    ></ShopPart>
  );
};

export default Home;
