import {Card, CardHeader, CardBody, CardFooter, Tabs, Tab} from "@nextui-org/react"
import Create from "./create"
import Posts from './Posts'
export default function createAndPost(){
    return (
        <div className="w-full flex flex-col items-center sm:w-50%">
        <Tabs variant="underlined" aria-label="Disabled Options"  fullWidth="true">
          <Tab key="all" title="All">
            <div className="flex flex-col justify-center">
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>

            </div>
        
            
          </Tab>
          <Tab key="friend" title="Friends">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="follwing" title="Following">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="groups" title="Groups">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="tiped" title="mores">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          {/* <Tab key="liked" title="Liked">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="commented" title="Commented">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="bookmarks" title="bookmarks">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab> */}
        </Tabs>
      </div>  
    )
}