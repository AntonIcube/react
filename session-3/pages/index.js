import Layout from "../components/layout";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/apollo";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(8),
  }
}));


const CATEGORY_LIST = gql`
  {
    categoryList(filters: { ids: { eq: "2" } }) {
      children {
        id
        name
        url_key
        children {
          id
          name
          url_key
          children {
            id
            name
            url_key
          }
        }
      }
    }
  }
`;
function Home() {
  const classes = useStyles();
  const response = useQuery(CATEGORY_LIST);
  const { loading, error, data } = response;
  if (loading) {
    return <Layout>Loading ...</Layout>;
  }
  if (error) {
    return <Layout>Error...</Layout>;
  }

  const category = data.categoryList;

  return (
    <>
      <Layout>
        <Banner />
        <List component="nav">
          {category[0].children.map((val, key) => {
            return (
              <div key={key}>
                  <Link href="/category/[id]" as={`/category/${val.url_key}`}>
                    <ListItemText primary={val.name} />
                  </Link>
                {val.children.length > 0 && (
                  <List>
                    {val.children.map((valchild) => {
                      return (
                        <ListItem
                          key={valchild.id}
                          className={classes.nested}
                        >
                          <Link
                            href="/category/[id]" as={`/category/${valchild.url_key}`}
                          >
                            <ListItemText primary={valchild.name} />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </div>
            );
          })}
        </List>
      </Layout>
    </>
  );
}

const Banner = () => {
  return (
    <div>
      <span>
        <img src="/banner1.png" alt="icon" className="banner"/>
      </span>
    </div>
  )
};

export default withApollo({ ssr: true })(Home);



// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// export default function Home() {
//   const router = useRouter

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next APP</title>
//       </Head>

//       <main>
//         <ul>
//           <li>
//             <a href="/category">Category</a>
//           </li>
//           <li>
//             <Link href="/category">
//               <a>Category</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/product/[id]" as="/product/12">
//               <a>Product 12</a>
//             </Link>
//           </li>
//           <li>
//             <button 
//               onClick={() => setTimeout(()=>{
//                 router.push("/category") 
//               },1000)}>
//                 to catetory
//             </button>
//           </li>
//         </ul>
//       </main>
//     </div>
//   )
// }
