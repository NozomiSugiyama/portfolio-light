#!/bin/bash

shell="/bin/bash"
base=$(pwd)

yarn build
firebase deploy --only hosting

