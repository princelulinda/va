import { View, Text,StatusBar, ScrollView , SafeAreaView} from 'react-native'
import React from 'react'
import AppHeader from '../../component/Header'
import HomeTopNavigation from '../../navigation/HomeTopNavigation'
import AppBar from '../../component/AppBar'
import ToolBar from '../../component/ToolBar'
import Users from '../../component/Users'
import Story from '../../component/Story'
import Feed from '../../component/Feed'




export default function HomeScreen() {
  return (
<>
			<StatusBar
				backgroundColor='#FFFFFF'
				barStyle='dark-content'
			/>
			<SafeAreaView>
				<ScrollView>
					<AppBar />
					{/* <ToolBar /> */}
					{/* <Users /> */}
					<Story />
					<Feed />
				</ScrollView>
			</SafeAreaView>
		</>
  )
}