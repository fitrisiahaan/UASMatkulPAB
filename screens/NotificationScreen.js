import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body,
  Subtitle,
  Right,
  Icon,
} from "native-base";
import { StackNavigator } from "react-navigation";

const NotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Get notifications from backend
    fetch("https://example.com/api/notifications")
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);

  const onDismiss = (id) => {
    // Dismiss notification
    fetch("https://example.com/api/notifications/" + id, {
      method: "DELETE",
    });
  };

  return (
    <Container>
      <Header>
        <Title>Notifications</Title>
      </Header>
      <Body>
        <List>
          {notifications.map((notification) => (
            <ListItem
              key={notification.id}
              onPress={() => navigation.navigate("NotificationDetails", { notification })}
            >
              <Thumbnail
                source={{ uri: notification.thumbnail }}
              />
              <Body>
                <Text>{notification.title}</Text>
                <Subtitle>{notification.body}</Subtitle>
              </Body>
              <Right>
                <Button
                  onPress={() => onDismiss(notification.id)}
                  icon={<Icon name="close" />}
                />
              </Right>
            </ListItem>
          ))}
        </List>
      </Body>
    </Container>
  );
};

const App = () => {
  return (
    <StackNavigator initialRouteName="Notifications">
      <StackNavigator.Screen
        name="Notifications"
        component={NotificationScreen}
      />
      <StackNavigator.Screen
        name="NotificationDetails"
        component={() => <Text>Notification Details</Text>}
      />
    </StackNavigator>
  );
};

export default App;
