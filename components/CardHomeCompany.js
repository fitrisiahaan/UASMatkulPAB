import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Image, Stack, Center, Text, HStack, Badge } from 'native-base';

const CardHomeCompany = ({ job, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('hello');
      }}
    >
      <Box
        alignSelf="center"
        width="90%"
        height="140px"
        maxW="85%"
        maxH="150px"
        borderRadius="md"
        mt={3}
        px={5}
        py={3}
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
        bg={['#FD3E3E', '#FD3E3E']}
      >
        <Stack direction="row" mb="2.5" mt="4" space={3}>
          <Center size="70" rounded="sm">
            <Image
              size={70}
              borderRadius={100}
              source={{ uri: job.logo }}
              alt="Alternate Text"
              bg={'#FFFFFF'}
            />
          </Center>
          <Box w="200" h="100" maxH="100" rounded="md" mt={-1}>
            <Box w="full">
              <Text color={'#FFFFFF'} bold fontSize="14">
                {job.jobTitle}
              </Text>
              <Text color={'#FFFFFF'} fontSize="xs">
                {job.applicantName}
              </Text>
            </Box>
            <Box w="full" mt={2}>
              <HStack space={1}>
                <Badge
                  bg={'#D9D9D9'}
                  rounded={5}
                  variant={'solid'}
                  alignSelf="center"
                  size=""
                >
                  <Text bold fontSize="2xs">{job.skills}</Text>
                </Badge>
              </HStack>
            </Box>
            <Box w="full" mt={5}>
              <Text color={'#FFFFFF'} fontSize="10">{`Posted ${job.uploadDate}`}</Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </TouchableOpacity>
  );
};

export default CardHomeCompany;